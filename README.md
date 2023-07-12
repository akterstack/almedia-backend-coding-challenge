# Almedia Backend Coding Challenge

You can find task details [here (PROBLEM.md)](PROBLEM.md)

## Design decision

Since the task about to transform and validate raw offer data into one Offer entity from multiple sources, I followed adapter design pattern. I also tried to follow popular design principals (ie. SOLID, DRY, YAGNI) to keep the implementation clean, readable and maintainable.

- Keep a map/config for all available providers (see `./helper.ts`)
- Concurrent iteration over all available providers (see `AppService.runOfferJob()` in `./app.service.ts`)
  - Pull out offer only objects/list from raw response (see `./adapters/data/*DataResolver` classes)
  - Transform raw offers to OfferDto throw corresponding adapters (see `./adapters`)
  - Validate OfferDto using `class-validator` decorators. For single source of validation, I keep them in DTO file
    - Log `[WARN]` for ValidationError/*Error
  - Transform validated OfferDto to Offer entity
- Log successfully transformed Offer entity objects.

## How to run

This is a standalone Nest.js project. Simply run `npm start` to see the successfully transformed Offer entity objects.

## Improvements

Since the goal of this assignment is to verify solution design, I scope out following improvement tasks which are good to have for any projects.

- Test coverage minimum 92%
- Custom error types and handling
