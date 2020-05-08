/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractTransaction, EventFilter, Signer } from "ethers";
import { Listener, Provider } from "ethers/providers";
import { Arrayish, BigNumber, BigNumberish, Interface } from "ethers/utils";
import {
  TransactionOverrides,
  TypedEventDescription,
  TypedFunctionDescription
} from ".";

interface IUniswapFactoryInterface extends Interface {
  functions: {
    initializeFactory: TypedFunctionDescription<{
      encode([template]: [string]): string;
    }>;

    createExchange: TypedFunctionDescription<{
      encode([token]: [string]): string;
    }>;

    getExchange: TypedFunctionDescription<{
      encode([token]: [string]): string;
    }>;

    getToken: TypedFunctionDescription<{ encode([token]: [string]): string }>;

    getTokenWihId: TypedFunctionDescription<{
      encode([token_id]: [BigNumberish]): string;
    }>;
  };

  events: {
    NewExchange: TypedEventDescription<{
      encodeTopics([token, exchange]: [string | null, string | null]): string[];
    }>;
  };
}

export class IUniswapFactory extends Contract {
  connect(signerOrProvider: Signer | Provider | string): IUniswapFactory;
  attach(addressOrName: string): IUniswapFactory;
  deployed(): Promise<IUniswapFactory>;

  on(event: EventFilter | string, listener: Listener): IUniswapFactory;
  once(event: EventFilter | string, listener: Listener): IUniswapFactory;
  addListener(
    eventName: EventFilter | string,
    listener: Listener
  ): IUniswapFactory;
  removeAllListeners(eventName: EventFilter | string): IUniswapFactory;
  removeListener(eventName: any, listener: Listener): IUniswapFactory;

  interface: IUniswapFactoryInterface;

  functions: {
    initializeFactory(
      template: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    createExchange(
      token: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    getExchange(token: string): Promise<string>;

    getToken(token: string): Promise<string>;

    getTokenWihId(token_id: BigNumberish): Promise<string>;
  };

  initializeFactory(
    template: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  createExchange(
    token: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  getExchange(token: string): Promise<string>;

  getToken(token: string): Promise<string>;

  getTokenWihId(token_id: BigNumberish): Promise<string>;

  filters: {
    NewExchange(token: string | null, exchange: string | null): EventFilter;
  };

  estimate: {
    initializeFactory(template: string): Promise<BigNumber>;

    createExchange(token: string): Promise<BigNumber>;

    getExchange(token: string): Promise<BigNumber>;

    getToken(token: string): Promise<BigNumber>;

    getTokenWihId(token_id: BigNumberish): Promise<BigNumber>;
  };
}
