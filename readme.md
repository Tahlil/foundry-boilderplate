# Foundry boilerplate
Foundry boilerplate for developing, testing and deploying smart contract in solidity. Added `js` support for giving flexibility deploying and compiling the contract(s).

### Installation
- Install Rust:
https://rustup.rs/
- Install foundry
```
cargo install --git https://github.com/foundry-rs/foundry foundry-cli anvil --bins --locked
```

### Instruction
- Compile without generating the abi:
```
npm run compile
```
- Compile and also generate the abi:
```
npm run compile:abi
```