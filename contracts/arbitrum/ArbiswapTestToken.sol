pragma solidity ^0.5.0;
import "../tokens/ERC20.sol";
import "../uniswap/ArbSys.sol";


// The address of this token in the Arbitrum Chain should be manually configured
// to match the address of the Ethereum based ERC-20 token which it represents
contract ArbiswapTestToken is ERC20 {
	bytes32 public name;
	bytes32 public symbol;
	uint256 public decimals;

	address uniswapMarketAddress;

	constructor(address _uniswapMarketAddress) public {
		name = "Arbiswap Test Token";
	    symbol = "SWAP";
	    decimals = 18;
	    uniswapMarketAddress = _uniswapMarketAddress;
	}

	function _transfer(address from, address to, uint256 value) internal {
		super._transfer(from, to, value);

		// Automatically approve transfers to the uniswap market.
		// This eliminates the need for users to manually approve it
		// through uniswap's interface.
		//
		// If a user wants to trade any other token, they'll have to
		// approve transfers for it
		_approve(to, uniswapMarketAddress, uint256(-1));
  	}

  	// The following two functions are copied from the ArbERC20 token template contract
  	// This contract is being independently deployed in order to enable the automatic
  	// approval of the uniswap market
  	function adminMint(address account, uint256 amount) public {
        // This function is only callable through admin logic since address 1 cannot make calls
        require(msg.sender == address(1));
        _mint(account, amount);
    }

    function withdraw(address account, uint256 amount) public {
        _burn(msg.sender, amount);
        ArbSys(100).withdrawERC20(account, amount);
    }
}
