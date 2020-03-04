pragma solidity ^0.5.5;

import "@openzeppelin/contracts/token/ERC721/ERC721Full.sol";

contract voteToken is ERC721Full  {
    string public constant name = "VoteToken";
    string public constant symbol = "VTKN";

    constructor (string memory _name, string memory _symbol) public
        ERC721Full(_name, _symbol)
    {
    }

    function mintUniqueTokenTo(
        address _to,
        uint256 _tokenId,
        string memory  _tokenURI
    ) public
    {
        super._mint(_to, _tokenId);
        super._setTokenURI(_tokenId, _tokenURI);
    }
}