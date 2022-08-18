# FactoryEventsAndErrors721










## Events

### AmbassadorAdded

```solidity
event AmbassadorAdded(address indexed whitelistedAmb)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| whitelistedAmb `indexed` | address | undefined |

### AmbassadorDeleted

```solidity
event AmbassadorDeleted(address indexed removedAmb)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| removedAmb `indexed` | address | undefined |

### ERC721BasicCreated

```solidity
event ERC721BasicCreated(address indexed newSplitter, address indexed newCollection, address indexed newCreator)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| newSplitter `indexed` | address | undefined |
| newCollection `indexed` | address | undefined |
| newCreator `indexed` | address | undefined |

### ERC721LazyCreated

```solidity
event ERC721LazyCreated(address indexed newSplitter, address indexed newCollection, address indexed newCreator)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| newSplitter `indexed` | address | undefined |
| newCollection `indexed` | address | undefined |
| newCreator `indexed` | address | undefined |

### ERC721MinimalCreated

```solidity
event ERC721MinimalCreated(address indexed newSplitter, address indexed newCollection, address indexed newCreator)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| newSplitter `indexed` | address | undefined |
| newCollection `indexed` | address | undefined |
| newCreator `indexed` | address | undefined |

### ERC721WhitelistCreated

```solidity
event ERC721WhitelistCreated(address indexed newSplitter, address indexed newCollection, address indexed newCreator)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| newSplitter `indexed` | address | undefined |
| newCollection `indexed` | address | undefined |
| newCreator `indexed` | address | undefined |

### MarketplaceUpdated

```solidity
event MarketplaceUpdated(address indexed newMarket)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| newMarket `indexed` | address | undefined |

### RouterUpdated

```solidity
event RouterUpdated(address indexed newRouter)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| newRouter `indexed` | address | undefined |

### SignerUpdated

```solidity
event SignerUpdated(address indexed newSigner)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| newSigner `indexed` | address | undefined |

### SplitterCreated

```solidity
event SplitterCreated(address indexed creator, uint256[] shares, address[] payees, address splitter)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| creator `indexed` | address | undefined |
| shares  | uint256[] | undefined |
| payees  | address[] | undefined |
| splitter  | address | undefined |



## Errors

### SplitterFail

```solidity
error SplitterFail()
```



*0x00adecf0*


