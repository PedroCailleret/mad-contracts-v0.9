# SafeTransferLib

_Solmate (https://github.com/Rari-Capital/solmate/blob/main/src/utils/SafeTransferLib.sol)_

Safe ETH and ERC20 transfer library that gracefully handles missing return values.

_Use with caution! Some functions in this library knowingly create dirty bits at the destination of the free memory pointer.Note that none of the functions in this library check that a token has code at all! That responsibility is delegated to the caller._
