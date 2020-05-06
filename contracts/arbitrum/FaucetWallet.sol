pragma solidity ^0.5.0;
import "../interfaces/IERC20.sol";

contract FaucetWallet {
	address owner;
	IERC20 token;
	uint256 ethAmount;
	uint256 tokenAmount;

	modifier onlyOwner {
		require(msg.sender == owner, "only owner");
		_;
	}

	constructor() public {
		owner = msg.sender;
	}

	function () external payable {}  

	function updateFaucet(address _token, uint256 _tokenAmount, uint256 _ethAmount) external onlyOwner {
		token = IERC20(_token);
		tokenAmount = _tokenAmount;
		ethAmount = _ethAmount;
	}

	function transfer(address payable to) external onlyOwner {
		to.transfer(ethAmount);
		token.transfer(to, tokenAmount);
	}
}
