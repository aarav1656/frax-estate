/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { NFTMarket, NFTMarketInterface } from "../../contracts/NFTMarket";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "message",
        type: "string",
      },
    ],
    name: "NFTMarket__ItemId",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "requiered",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "message",
        type: "string",
      },
    ],
    name: "NFTMarket__ListingFee",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "message",
        type: "string",
      },
    ],
    name: "NFTMarket__Price",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "message",
        type: "string",
      },
    ],
    name: "NFTMarket__SetListingFee",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "itemId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "nftContract",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "seller",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "createAt",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "sold",
        type: "bool",
      },
    ],
    name: "marketItemNFT",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "nftContract",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "itemId",
        type: "uint256",
      },
    ],
    name: "buyNFT",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "nftContract",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
    ],
    name: "createMarketItem",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "offset",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "limit",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "sold",
        type: "uint256",
      },
    ],
    name: "fetchMarketItems",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "itemId",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "nftContract",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256",
          },
          {
            internalType: "address payable",
            name: "seller",
            type: "address",
          },
          {
            internalType: "address payable",
            name: "owner",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "price",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "createAt",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "sold",
            type: "bool",
          },
        ],
        internalType: "struct NFTMarket.MarketItem[]",
        name: "",
        type: "tuple[]",
      },
      {
        internalType: "uint256",
        name: "nextOffset",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalSolded",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "time",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "limit",
        type: "uint256",
      },
    ],
    name: "fetchMarketItemsByTime",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "itemId",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "nftContract",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256",
          },
          {
            internalType: "address payable",
            name: "seller",
            type: "address",
          },
          {
            internalType: "address payable",
            name: "owner",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "price",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "createAt",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "sold",
            type: "bool",
          },
        ],
        internalType: "struct NFTMarket.MarketItem[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "getItemById",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "itemId",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "nftContract",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256",
          },
          {
            internalType: "address payable",
            name: "seller",
            type: "address",
          },
          {
            internalType: "address payable",
            name: "owner",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "price",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "createAt",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "sold",
            type: "bool",
          },
        ],
        internalType: "struct NFTMarket.MarketItem",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getListingFee",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getMarketItems",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "itemId",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "nftContract",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256",
          },
          {
            internalType: "address payable",
            name: "seller",
            type: "address",
          },
          {
            internalType: "address payable",
            name: "owner",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "price",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "createAt",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "sold",
            type: "bool",
          },
        ],
        internalType: "struct NFTMarket.MarketItem[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getNFTByOwner",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "itemId",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "nftContract",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256",
          },
          {
            internalType: "address payable",
            name: "seller",
            type: "address",
          },
          {
            internalType: "address payable",
            name: "owner",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "price",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "createAt",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "sold",
            type: "bool",
          },
        ],
        internalType: "struct NFTMarket.MarketItem[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getNFTBySeller",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "itemId",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "nftContract",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256",
          },
          {
            internalType: "address payable",
            name: "seller",
            type: "address",
          },
          {
            internalType: "address payable",
            name: "owner",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "price",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "createAt",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "sold",
            type: "bool",
          },
        ],
        internalType: "struct NFTMarket.MarketItem[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getOwner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getTotalItems",
    outputs: [
      {
        internalType: "uint256",
        name: "total",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_price",
        type: "uint256",
      },
    ],
    name: "setListingFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50600160008190555033600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506608e1bc9bf04000600481905550612763806100776000396000f3fe6080604052600436106100a75760003560e01c8063597a8f9d11610064578063597a8f9d1461019d578063893d20e8146101dc578063a82ba76f14610207578063af5f172d14610223578063b8fe6abe14610260578063cd2f07101461028b576100a7565b8063035b987e146100ac57806303976f76146100d7578063131dbd091461010257806329aa3a421461012b578063310aac691461015657806358eb2df514610181575b600080fd5b3480156100b857600080fd5b506100c16102c8565b6040516100ce9190612262565b60405180910390f35b3480156100e357600080fd5b506100ec61059c565b6040516100f99190612262565b60405180910390f35b34801561010e57600080fd5b5061012960048036038101906101249190611dc8565b610870565b005b34801561013757600080fd5b5061014061090a565b60405161014d9190612262565b60405180910390f35b34801561016257600080fd5b5061016b610ba8565b604051610178919061235e565b60405180910390f35b61019b60048036038101906101969190611d75565b610bd8565b005b3480156101a957600080fd5b506101c460048036038101906101bf9190611e35565b610f13565b6040516101d393929190612284565b60405180910390f35b3480156101e857600080fd5b506101f1611256565b6040516101fe919061216a565b60405180910390f35b610221600480360381019061021c9190611d35565b611280565b005b34801561022f57600080fd5b5061024a60048036038101906102459190611df5565b611598565b6040516102579190612262565b60405180910390f35b34801561026c57600080fd5b506102756118c5565b604051610282919061235e565b60405180910390f35b34801561029757600080fd5b506102b260048036038101906102ad9190611dc8565b6118cf565b6040516102bf9190612342565b60405180910390f35b606060006102d66001611a9a565b905060006102e382611aa8565b90506000808267ffffffffffffffff811115610302576103016125b2565b5b60405190808252806020026020018201604052801561033b57816020015b610328611c82565b8152602001906001900390816103205790505b50905060005b84811015610591573373ffffffffffffffffffffffffffffffffffffffff166005600060018461037191906123f1565b815260200190815260200160002060030160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141561057e576000600560006001846103d291906123f1565b815260200190815260200160002060000154905060006005600083815260200190815260200160002090508060405180610100016040529081600082015481526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600282015481526020016003820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016004820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160058201548152602001600682015481526020016007820160009054906101000a900460ff16151515158152505084868151811061056257610561612583565b5b602002602001018190525084806105789061250b565b95505050505b80806105899061250b565b915050610341565b508094505050505090565b606060006105aa6001611a9a565b905060006105b782611b5d565b90506000808267ffffffffffffffff8111156105d6576105d56125b2565b5b60405190808252806020026020018201604052801561060f57816020015b6105fc611c82565b8152602001906001900390816105f45790505b50905060005b84811015610865573373ffffffffffffffffffffffffffffffffffffffff166005600060018461064591906123f1565b815260200190815260200160002060040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415610852576000600560006001846106a691906123f1565b815260200190815260200160002060000154905060006005600083815260200190815260200160002090508060405180610100016040529081600082015481526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600282015481526020016003820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016004820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160058201548152602001600682015481526020016007820160009054906101000a900460ff16151515158152505084868151811061083657610835612583565b5b6020026020010181905250848061084c9061250b565b95505050505b808061085d9061250b565b915050610615565b508094505050505090565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610900576040517f1ff487320000000000000000000000000000000000000000000000000000000081526004016108f7906122e2565b60405180910390fd5b8060048190555050565b606060006109186001611a9a565b905060006109266002611a9a565b826109319190612447565b905060008167ffffffffffffffff81111561094f5761094e6125b2565b5b60405190808252806020026020018201604052801561098857816020015b610975611c82565b81526020019060019003908161096d5790505b5090506000805b84811015610b9d57600560006001836109a891906123f1565b815260200190815260200160002060070160009054906101000a900460ff16610b8a576000600560006001846109de91906123f1565b815260200190815260200160002060000154905060006005600083815260200190815260200160002090508060405180610100016040529081600082015481526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600282015481526020016003820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016004820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160058201548152602001600682015481526020016007820160009054906101000a900460ff161515151581525050858581518110610b6e57610b6d612583565b5b60200260200101819052508380610b849061250b565b94505050505b8080610b959061250b565b91505061098f565b508194505050505090565b600080610bb56001611a9a565b90506000610bc36002611a9a565b82610bce9190612447565b9050809250505090565b610be0611c12565b60008111610c23576040517fb0cca22b000000000000000000000000000000000000000000000000000000008152600401610c1a90612302565b60405180910390fd5b6004543414610c6b576004546040517f4306e2a8000000000000000000000000000000000000000000000000000000008152600401610c629190612379565b60405180910390fd5b610c756001611c62565b6000610c816001611a9a565b905060004290506040518061010001604052808381526020018673ffffffffffffffffffffffffffffffffffffffff1681526020018581526020013373ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff16815260200184815260200182815260200160001515815250600560008481526020019081526020016000206000820151816000015560208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506040820151816002015560608201518160030160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060808201518160040160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060a0820151816005015560c0820151816006015560e08201518160070160006101000a81548160ff0219169083151502179055509050508473ffffffffffffffffffffffffffffffffffffffff166323b872dd3330876040518463ffffffff1660e01b8152600401610e78939291906121d8565b600060405180830381600087803b158015610e9257600080fd5b505af1158015610ea6573d6000803e3d6000fd5b50505050838573ffffffffffffffffffffffffffffffffffffffff16837f324e86ff66d7c77debc9fe7d78660701077b278899494594ed090d480aa915dd33600088876000604051610efc95949392919061220f565b60405180910390a45050610f0e611c78565b505050565b60606000806000610f246001611a9a565b90506000610f326002611a9a565b82610f3d9190612447565b90506000871415610f4d57600196505b8781610f599190612447565b871115610f6f578781610f6c9190612447565b96505b60008767ffffffffffffffff811115610f8b57610f8a6125b2565b5b604051908082528060200260200182016040528015610fc457816020015b610fb1611c82565b815260200190600190039081610fa95790505b5090506000806000805b8681108015610fdc57508b84105b1561120f5760018b828f610ff091906123f1565b610ffa91906123f1565b61100491906123f1565b92508683116111fc576005600084815260200190815260200160002060070160009054906101000a900460ff166111ec5760006005600085815260200190815260200160002060000154905060006005600083815260200190815260200160002090508060405180610100016040529081600082015481526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600282015481526020016003820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016004820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160058201548152602001600682015481526020016007820160009054906101000a900460ff1615151515815250508787815181106111cc576111cb612583565b5b602002602001018190525085806111e29061250b565b96505050506111fb565b81806111f79061250b565b9250505b5b80806112079061250b565b915050610fce565b508560018b8e61121f91906123f1565b61122991906123f1565b1115611233578990505b838b8d61124091906123f1565b8298509850985050505050505093509350939050565b6000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b611288611c12565b600060056000838152602001908152602001600020600501549050600060056000848152602001908152602001600020600201549050813414611300576040517fb0cca22b0000000000000000000000000000000000000000000000000000000081526004016112f7906122c2565b60405180910390fd5b6005600084815260200190815260200160002060030160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc349081150290604051600060405180830381858888f1935050505015801561137c573d6000803e3d6000fd5b508373ffffffffffffffffffffffffffffffffffffffff166323b872dd3033846040518463ffffffff1660e01b81526004016113ba939291906121d8565b600060405180830381600087803b1580156113d457600080fd5b505af11580156113e8573d6000803e3d6000fd5b50505050336005600085815260200190815260200160002060040160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060016005600085815260200190815260200160002060070160006101000a81548160ff02191690831515021790555061147a6002611c62565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc6004549081150290604051600060405180830381858888f193505050501580156114e4573d6000803e3d6000fd5b50808473ffffffffffffffffffffffffffffffffffffffff16847f324e86ff66d7c77debc9fe7d78660701077b278899494594ed090d480aa915dd6005600088815260200190815260200160002060030160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff163387600560008b8152602001908152602001600020600601546001604051611582959493929190612185565b60405180910390a45050611594611c78565b5050565b606060006115a66001611a9a565b905060006115b46002611a9a565b826115bf9190612447565b905060006002826115d09190612447565b905060008514156115e057600194505b80826115ec9190612447565b8511156116025780826115ff9190612447565b94505b60008567ffffffffffffffff81111561161e5761161d6125b2565b5b60405190808252806020026020018201604052801561165757816020015b611644611c82565b81526020019060019003908161163c5790505b5090506000805b858110801561166c57508782105b156118b657600560006001838761168391906123f1565b61168d91906123f1565b815260200190815260200160002060070160009054906101000a900460ff166118a357600060056000600184886116c491906123f1565b6116ce91906123f1565b8152602001908152602001600020600001549050600060056000838152602001908152602001600020905060008b148061171c57504281600601541115801561171b57508a816006015410155b5b156118a0578060405180610100016040529081600082015481526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600282015481526020016003820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016004820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160058201548152602001600682015481526020016007820160009054906101000a900460ff16151515158152505085858151811061188657611885612583565b5b6020026020010181905250838061189c9061250b565b9450505b50505b80806118ae9061250b565b91505061165e565b50819550505050505092915050565b6000600454905090565b6118d7611c82565b6001821080156118ef57506118ec6001611a9a565b82115b1561192f576040517ff1bfa95b000000000000000000000000000000000000000000000000000000008152600401611926906122e2565b60405180910390fd5b6005600083815260200190815260200160002060405180610100016040529081600082015481526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600282015481526020016003820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016004820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160058201548152602001600682015481526020016007820160009054906101000a900460ff1615151515815250509050919050565b600081600001549050919050565b6000806000905060005b83811015611b53573373ffffffffffffffffffffffffffffffffffffffff1660056000600184611ae291906123f1565b815260200190815260200160002060030160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415611b4057600182611b3d91906123f1565b91505b8080611b4b9061250b565b915050611ab2565b5080915050919050565b6000806000905060005b83811015611c08573373ffffffffffffffffffffffffffffffffffffffff1660056000600184611b9791906123f1565b815260200190815260200160002060040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415611bf557600182611bf291906123f1565b91505b8080611c009061250b565b915050611b67565b5080915050919050565b60026000541415611c58576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611c4f90612322565b60405180910390fd5b6002600081905550565b6001816000016000828254019250508190555050565b6001600081905550565b60405180610100016040528060008152602001600073ffffffffffffffffffffffffffffffffffffffff16815260200160008152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff16815260200160008152602001600081526020016000151581525090565b600081359050611d1a816126ff565b92915050565b600081359050611d2f81612716565b92915050565b60008060408385031215611d4c57611d4b6125e1565b5b6000611d5a85828601611d0b565b9250506020611d6b85828601611d20565b9150509250929050565b600080600060608486031215611d8e57611d8d6125e1565b5b6000611d9c86828701611d0b565b9350506020611dad86828701611d20565b9250506040611dbe86828701611d20565b9150509250925092565b600060208284031215611dde57611ddd6125e1565b5b6000611dec84828501611d20565b91505092915050565b60008060408385031215611e0c57611e0b6125e1565b5b6000611e1a85828601611d20565b9250506020611e2b85828601611d20565b9150509250929050565b600080600060608486031215611e4e57611e4d6125e1565b5b6000611e5c86828701611d20565b9350506020611e6d86828701611d20565b9250506040611e7e86828701611d20565b9150509250925092565b6000611e948383612008565b6101008301905092915050565b611eaa816124d5565b82525050565b611eb98161248d565b82525050565b611ec88161247b565b82525050565b611ed78161247b565b82525050565b6000611ee8826123b7565b611ef281856123cf565b9350611efd836123a7565b8060005b83811015611f2e578151611f158882611e88565b9750611f20836123c2565b925050600181019050611f01565b5085935050505092915050565b611f448161249f565b82525050565b611f538161249f565b82525050565b6000611f66603c836123e0565b9150611f71826125e6565b604082019050919050565b6000611f896011836123e0565b9150611f9482612635565b602082019050919050565b6000611fac6018836123e0565b9150611fb78261265e565b602082019050919050565b6000611fcf6024836123e0565b9150611fda82612687565b604082019050919050565b6000611ff2601f836123e0565b9150611ffd826126d6565b602082019050919050565b6101008201600082015161201f600085018261214c565b5060208201516120326020850182611ebf565b506040820151612045604085018261214c565b5060608201516120586060850182611eb0565b50608082015161206b6080850182611eb0565b5060a082015161207e60a085018261214c565b5060c082015161209160c085018261214c565b5060e08201516120a460e0850182611f3b565b50505050565b610100820160008201516120c1600085018261214c565b5060208201516120d46020850182611ebf565b5060408201516120e7604085018261214c565b5060608201516120fa6060850182611eb0565b50608082015161210d6080850182611eb0565b5060a082015161212060a085018261214c565b5060c082015161213360c085018261214c565b5060e082015161214660e0850182611f3b565b50505050565b612155816124cb565b82525050565b612164816124cb565b82525050565b600060208201905061217f6000830184611ece565b92915050565b600060a08201905061219a6000830188611ea1565b6121a76020830187611ece565b6121b4604083018661215b565b6121c1606083018561215b565b6121ce6080830184611f4a565b9695505050505050565b60006060820190506121ed6000830186611ece565b6121fa6020830185611ece565b612207604083018461215b565b949350505050565b600060a0820190506122246000830188611ece565b6122316020830187611ece565b61223e604083018661215b565b61224b606083018561215b565b6122586080830184611f4a565b9695505050505050565b6000602082019050818103600083015261227c8184611edd565b905092915050565b6000606082019050818103600083015261229e8186611edd565b90506122ad602083018561215b565b6122ba604083018461215b565b949350505050565b600060208201905081810360008301526122db81611f59565b9050919050565b600060208201905081810360008301526122fb81611f7c565b9050919050565b6000602082019050818103600083015261231b81611f9f565b9050919050565b6000602082019050818103600083015261233b81611fe5565b9050919050565b60006101008201905061235860008301846120aa565b92915050565b6000602082019050612373600083018461215b565b92915050565b600060408201905061238e600083018461215b565b818103602083015261239f81611fc2565b905092915050565b6000819050602082019050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b60006123fc826124cb565b9150612407836124cb565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561243c5761243b612554565b5b828201905092915050565b6000612452826124cb565b915061245d836124cb565b9250828210156124705761246f612554565b5b828203905092915050565b6000612486826124ab565b9050919050565b6000612498826124ab565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60006124e0826124e7565b9050919050565b60006124f2826124f9565b9050919050565b6000612504826124ab565b9050919050565b6000612516826124cb565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561254957612548612554565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b7f506c65617365207375626d6974207468652061736b696e67207072696365206960008201527f6e206f7264657220746f20636f6d706c65746520707572636861736500000000602082015250565b7f5072656d697373696f6e2064656e696564000000000000000000000000000000600082015250565b7f5072696365206d7573742062652061626f7665207a65726f0000000000000000600082015250565b7f5072696365206d75737420626520657175616c20746f206c697374696e67207060008201527f7269636500000000000000000000000000000000000000000000000000000000602082015250565b7f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00600082015250565b6127088161247b565b811461271357600080fd5b50565b61271f816124cb565b811461272a57600080fd5b5056fea26469706673582212203d179ffecbdac3cb335f556ee82d1faacbe2480b45bd95c187bd8fd6ede3b26764736f6c63430008070033";

type NFTMarketConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: NFTMarketConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class NFTMarket__factory extends ContractFactory {
  constructor(...args: NFTMarketConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<NFTMarket> {
    return super.deploy(overrides || {}) as Promise<NFTMarket>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): NFTMarket {
    return super.attach(address) as NFTMarket;
  }
  override connect(signer: Signer): NFTMarket__factory {
    return super.connect(signer) as NFTMarket__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): NFTMarketInterface {
    return new utils.Interface(_abi) as NFTMarketInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): NFTMarket {
    return new Contract(address, _abi, signerOrProvider) as NFTMarket;
  }
}
