# Collapsit: Master the Art of Collapsing (and Un-Collapsing)

## Features
- Collapse/Uncollapse **all top-level functions and class methods** on a page.
- Future surprises... because who doesn’t love an upgrade?

## Usage
Use commands with `ctrl+shift+P` or keyboard shortcuts.

# Commands
- Collapse all top level functions: `collapse: c: top-level`
- Un-collapse all top level functions: `collapse: u: top-level` 

# Keybindings
- Collapse all top level functions: `ctrl+alt+n`
- Un-collapse all top level functions: `ctrl+alt+m`

## Compatibility
Currently compatible with **TypeScript only**. If you're coding in another language, maybe it's time to reconsider your choices.

## Extension Settings
None... yet. But patience is a virtue, and settings are on the horizon.

## Known Issues
What issues? It's flawless.

## Release Notes
### 0.0.5
- code refactoring (tried to make it more modular)
- fixed an issue where during collapse all the functions and methods of a class kept being visited multiple times
- fixed an issue where, in the case of classes collapsing, the class itself collapses first, then it uncollapses with collapsed class methods
- added comments to improve readability
### 0.0.4
- Fixed an issue where it was collapsing the class itself, not the methods of the class

### 0.0.3
- Alpha version unleashed (but not published!).

### 0.0.2
- Now supports **anonymous functions** in TypeScript.
- Added support for **TypeScript classes** because why not?

### 0.0.1
- The journey begins with support for **TypeScript functions**. Hello, world!

---

## Developer

| ![Sabbir Ahmed](https://avatars.githubusercontent.com/u/25762687?s=60) |
|:---:|
| [Sabbir Ahmed](https://github.com/ahmdsabbir) |

Call me when it collapsed!
