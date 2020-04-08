# Temporary Home of Gearshaft Types

This is our WIP place to get this types repository in shape before getting it into DefinitelyTyped.

## How to work on this repo

### Setting up the environment

1. `yarn install`
1. Start compilation via `yarn watch`

### Adding Types

1. Ensure you're `yarn watch`ing 
1. Add a test in `tests/` to exercise the new types.
1. Add new an entry for any new tests in `tsconfig.json`
1. See tests fail via compilation errors
1. Add types, see tests pass via compilation successes


### Testing out with actual projects

To use your local copy in a project that depends on this, you can `yarn link` it.
1. Let yarn know this is the copy to use when linking: `yarn link`
1. Link the local copy in our other project (in that project's root): `yarn link @types/gearshaft`

If you want to stop using the local copy, you can `yarn unlink @types/gearshaft` from the dependant project's root.
