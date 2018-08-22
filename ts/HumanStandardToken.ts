/* GENERATED BY TYPECHAIN VER. 0.2.7 */
/* tslint:disable */

import { BigNumber } from "bignumber.js";
import * as TC from "./typechain-runtime";

export class HumanStandardToken extends TC.TypeChainContract {
  public readonly rawWeb3Contract: any;

  public constructor(web3: any, address: string | BigNumber) {
    const abi = [
      {
        constant: true,
        inputs: [],
        name: "name",
        outputs: [{ name: "", type: "string" }],
        payable: false,
        stateMutability: "view",
        type: "function"
      },
      {
        constant: false,
        inputs: [
          { name: "_spender", type: "address" },
          { name: "_value", type: "uint256" }
        ],
        name: "approve",
        outputs: [{ name: "success", type: "bool" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        constant: true,
        inputs: [],
        name: "totalSupply",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function"
      },
      {
        constant: false,
        inputs: [
          { name: "_from", type: "address" },
          { name: "_to", type: "address" },
          { name: "_value", type: "uint256" }
        ],
        name: "transferFrom",
        outputs: [{ name: "success", type: "bool" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        constant: true,
        inputs: [],
        name: "decimals",
        outputs: [{ name: "", type: "uint8" }],
        payable: false,
        stateMutability: "view",
        type: "function"
      },
      {
        constant: true,
        inputs: [],
        name: "version",
        outputs: [{ name: "", type: "string" }],
        payable: false,
        stateMutability: "view",
        type: "function"
      },
      {
        constant: true,
        inputs: [{ name: "_owner", type: "address" }],
        name: "balanceOf",
        outputs: [{ name: "balance", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function"
      },
      {
        constant: true,
        inputs: [],
        name: "symbol",
        outputs: [{ name: "", type: "string" }],
        payable: false,
        stateMutability: "view",
        type: "function"
      },
      {
        constant: false,
        inputs: [
          { name: "_to", type: "address" },
          { name: "_value", type: "uint256" }
        ],
        name: "transfer",
        outputs: [{ name: "success", type: "bool" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        constant: true,
        inputs: [
          { name: "_owner", type: "address" },
          { name: "_spender", type: "address" }
        ],
        name: "allowance",
        outputs: [{ name: "remaining", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function"
      },
      {
        inputs: [
          { name: "_initialAmount", type: "uint256" },
          { name: "_tokenName", type: "string" },
          { name: "_decimalUnits", type: "uint8" },
          { name: "_tokenSymbol", type: "string" }
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "constructor"
      },
      {
        anonymous: false,
        inputs: [
          { indexed: true, name: "_from", type: "address" },
          { indexed: true, name: "_to", type: "address" },
          { indexed: false, name: "_value", type: "uint256" }
        ],
        name: "Transfer",
        type: "event"
      },
      {
        anonymous: false,
        inputs: [
          { indexed: true, name: "_owner", type: "address" },
          { indexed: true, name: "_spender", type: "address" },
          { indexed: false, name: "_value", type: "uint256" }
        ],
        name: "Approval",
        type: "event"
      },
      {
        constant: false,
        inputs: [
          { name: "_spender", type: "address" },
          { name: "_value", type: "uint256" },
          { name: "_extraData", type: "bytes" }
        ],
        name: "approveAndCall",
        outputs: [{ name: "success", type: "bool" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
      }
    ];
    super(web3, address, abi);
  }

  static async createAndValidate(
    web3: any,
    address: string | BigNumber
  ): Promise<HumanStandardToken> {
    const contract = new HumanStandardToken(web3, address);
    const code = await TC.promisify(web3.eth.getCode, [address]);

    // in case of missing smartcontract, code can be equal to "0x0" or "0x" depending on exact web3 implementation
    // to cover all these cases we just check against the source code length — there won't be any meaningful EVM program in less then 3 chars
    if (code.length < 4) {
      throw new Error(`Contract at ${address} doesn't exist!`);
    }
    return contract;
  }

  public get name(): Promise<string> {
    return TC.promisify(this.rawWeb3Contract.name, []);
  }

  public get totalSupply(): Promise<BigNumber> {
    return TC.promisify(this.rawWeb3Contract.totalSupply, []);
  }

  public get decimals(): Promise<BigNumber> {
    return TC.promisify(this.rawWeb3Contract.decimals, []);
  }

  public get version(): Promise<string> {
    return TC.promisify(this.rawWeb3Contract.version, []);
  }

  public get symbol(): Promise<string> {
    return TC.promisify(this.rawWeb3Contract.symbol, []);
  }

  public balanceOf(_owner: BigNumber | string): Promise<BigNumber> {
    return TC.promisify(this.rawWeb3Contract.balanceOf, [_owner.toString()]);
  }

  public allowance(
    _owner: BigNumber | string,
    _spender: BigNumber | string
  ): Promise<BigNumber> {
    return TC.promisify(this.rawWeb3Contract.allowance, [
      _owner.toString(),
      _spender.toString()
    ]);
  }

  public approveTx(
    _spender: BigNumber | string,
    _value: BigNumber | number
  ): TC.DeferredTransactionWrapper<TC.ITxParams> {
    return new TC.DeferredTransactionWrapper<TC.ITxParams>(this, "approve", [
      _spender.toString(),
      _value.toString()
    ]);
  }
  public transferFromTx(
    _from: BigNumber | string,
    _to: BigNumber | string,
    _value: BigNumber | number
  ): TC.DeferredTransactionWrapper<TC.ITxParams> {
    return new TC.DeferredTransactionWrapper<TC.ITxParams>(
      this,
      "transferFrom",
      [_from.toString(), _to.toString(), _value.toString()]
    );
  }
  public transferTx(
    _to: BigNumber | string,
    _value: BigNumber | number
  ): TC.DeferredTransactionWrapper<TC.ITxParams> {
    return new TC.DeferredTransactionWrapper<TC.ITxParams>(this, "transfer", [
      _to.toString(),
      _value.toString()
    ]);
  }
  public approveAndCallTx(
    _spender: BigNumber | string,
    _value: BigNumber | number,
    _extraData: string[]
  ): TC.DeferredTransactionWrapper<TC.ITxParams> {
    return new TC.DeferredTransactionWrapper<TC.ITxParams>(
      this,
      "approveAndCall",
      [
        _spender.toString(),
        _value.toString(),
        _extraData.map(val => val.toString())
      ]
    );
  }

  public TransferEvent(eventFilter: {
    _from?: BigNumber | string | Array<BigNumber | string>;
    _to?: BigNumber | string | Array<BigNumber | string>;
  }): TC.DeferredEventWrapper<
    {
      _from: BigNumber | string;
      _to: BigNumber | string;
      _value: BigNumber | number;
    },
    {
      _from?: BigNumber | string | Array<BigNumber | string>;
      _to?: BigNumber | string | Array<BigNumber | string>;
    }
  > {
    return new TC.DeferredEventWrapper<
      {
        _from: BigNumber | string;
        _to: BigNumber | string;
        _value: BigNumber | number;
      },
      {
        _from?: BigNumber | string | Array<BigNumber | string>;
        _to?: BigNumber | string | Array<BigNumber | string>;
      }
    >(this, "Transfer", eventFilter);
  }
  public ApprovalEvent(eventFilter: {
    _owner?: BigNumber | string | Array<BigNumber | string>;
    _spender?: BigNumber | string | Array<BigNumber | string>;
  }): TC.DeferredEventWrapper<
    {
      _owner: BigNumber | string;
      _spender: BigNumber | string;
      _value: BigNumber | number;
    },
    {
      _owner?: BigNumber | string | Array<BigNumber | string>;
      _spender?: BigNumber | string | Array<BigNumber | string>;
    }
  > {
    return new TC.DeferredEventWrapper<
      {
        _owner: BigNumber | string;
        _spender: BigNumber | string;
        _value: BigNumber | number;
      },
      {
        _owner?: BigNumber | string | Array<BigNumber | string>;
        _spender?: BigNumber | string | Array<BigNumber | string>;
      }
    >(this, "Approval", eventFilter);
  }
}
