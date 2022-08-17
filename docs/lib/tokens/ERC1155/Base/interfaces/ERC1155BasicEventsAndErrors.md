# ERC1155BasicEventsAndErrors










## Events

### BaseURISet

```solidity
event BaseURISet(string indexed newBaseURI)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| newBaseURI `indexed` | string | undefined |

### PublicMintStateSet

```solidity
event PublicMintStateSet(bool indexed newPublicState)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| newPublicState `indexed` | bool | undefined |

### RoyaltyFeeSet

```solidity
event RoyaltyFeeSet(uint256 indexed newRoyaltyFee)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| newRoyaltyFee `indexed` | uint256 | undefined |

### RoyaltyRecipientSet

```solidity
event RoyaltyRecipientSet(address indexed newRecipient)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| newRecipient `indexed` | address | undefined |



## Errors

### MaxSupplyReached

```solidity
error MaxSupplyReached()
```



*0xd05cb609*


### NotMintedYet

```solidity
error NotMintedYet()
```



*0xbad086ea*


### PublicMintClosed

```solidity
error PublicMintClosed()
```



*0x2d0a3f8e*


### WrongPrice

```solidity
error WrongPrice()
```



*0xf7760f25*


