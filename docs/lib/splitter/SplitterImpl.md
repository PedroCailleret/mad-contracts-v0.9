# SplitterImpl

_This contract assumes that ERC20 tokens will behave similarly to native tokens (Ether). Rebasing tokens, and tokens that apply fees during transfers, are likely to not be supported as expected. If in doubt, we encourage you to run tests before sending real value to this contract._

## Methods

### payee

```solidity
function payee(uint256 index) external view returns (address)
```

_Getter for the address of the payee number `index`._

#### Parameters

| Name  | Type    | Description |
| ----- | ------- | ----------- |
| index | uint256 | undefined   |

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | address | undefined   |

### releasable

```solidity
function releasable(address account) external view returns (uint256)
```

_Getter for the amount of payee&#39;s releasable Ether._

#### Parameters

| Name    | Type    | Description |
| ------- | ------- | ----------- |
| account | address | undefined   |

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | uint256 | undefined   |

### releasable

```solidity
function releasable(contract ERC20 token, address account) external view returns (uint256)
```

_Getter for the amount of payee&#39;s releasable `token` tokens. `token` should be the address of an ERC20 contract._

#### Parameters

| Name    | Type           | Description |
| ------- | -------------- | ----------- |
| token   | contract ERC20 | undefined   |
| account | address        | undefined   |

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | uint256 | undefined   |

### release

```solidity
function release(address payable account) external nonpayable
```

_Triggers a transfer to `account` of the amount of Ether they are owed, according to their percentage of the total shares and their previous withdrawals._

#### Parameters

| Name    | Type            | Description |
| ------- | --------------- | ----------- |
| account | address payable | undefined   |

### release

```solidity
function release(contract ERC20 token, address account) external nonpayable
```

_Triggers a transfer to `account` of the amount of `token` tokens they are owed, according to their percentage of the total shares and their previous withdrawals. `token` must be the address of an ERC20 contract._

#### Parameters

| Name    | Type           | Description |
| ------- | -------------- | ----------- |
| token   | contract ERC20 | undefined   |
| account | address        | undefined   |

### released

```solidity
function released(contract ERC20 token, address account) external view returns (uint256)
```

_Getter for the amount of `token` tokens already released to a payee. `token` should be the address of an ERC20 contract._

#### Parameters

| Name    | Type           | Description |
| ------- | -------------- | ----------- |
| token   | contract ERC20 | undefined   |
| account | address        | undefined   |

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | uint256 | undefined   |

### released

```solidity
function released(address account) external view returns (uint256)
```

_Getter for the amount of Ether already released to a payee._

#### Parameters

| Name    | Type    | Description |
| ------- | ------- | ----------- |
| account | address | undefined   |

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | uint256 | undefined   |

### shares

```solidity
function shares(address account) external view returns (uint256)
```

_Getter for the amount of shares held by an account._

#### Parameters

| Name    | Type    | Description |
| ------- | ------- | ----------- |
| account | address | undefined   |

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | uint256 | undefined   |

### totalReleased

```solidity
function totalReleased(contract ERC20 token) external view returns (uint256)
```

_Getter for the total amount of `token` already released. `token` should be the address of an ERC20 contract._

#### Parameters

| Name  | Type           | Description |
| ----- | -------------- | ----------- |
| token | contract ERC20 | undefined   |

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | uint256 | undefined   |

### totalReleased

```solidity
function totalReleased() external view returns (uint256)
```

_Getter for the total amount of Ether already released._

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | uint256 | undefined   |

### totalShares

```solidity
function totalShares() external view returns (uint256)
```

_Getter for the total shares held by payees._

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | uint256 | undefined   |

## Events

### ERC20PaymentReleased

```solidity
event ERC20PaymentReleased(contract ERC20 indexed token, address to, uint256 amount)
```

#### Parameters

| Name            | Type           | Description |
| --------------- | -------------- | ----------- |
| token `indexed` | contract ERC20 | undefined   |
| to              | address        | undefined   |
| amount          | uint256        | undefined   |

### PayeeAdded

```solidity
event PayeeAdded(address account, uint256 shares)
```

#### Parameters

| Name    | Type    | Description |
| ------- | ------- | ----------- |
| account | address | undefined   |
| shares  | uint256 | undefined   |

### PaymentReceived

```solidity
event PaymentReceived(address from, uint256 amount)
```

#### Parameters

| Name   | Type    | Description |
| ------ | ------- | ----------- |
| from   | address | undefined   |
| amount | uint256 | undefined   |

### PaymentReleased

```solidity
event PaymentReleased(address to, uint256 amount)
```

#### Parameters

| Name   | Type    | Description |
| ------ | ------- | ----------- |
| to     | address | undefined   |
| amount | uint256 | undefined   |