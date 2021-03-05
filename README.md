# [Peoplecott](https://charlesstover.github.io/peoplecott/)

[Peoplecott](https://charlesstover.github.io/peoplecott/), a play on the word
_boycott_, is an attempt to modernize voting with your wallet through
open-source contribution and the world wide web.

Companies today are obfuscated through brand names, making it nearly impossible
to boycott by memory. [Peoplecott](https://charlesstover.github.io/peoplecott/)
makes it easy for you to remove this veil while shopping.

## Tenets

- _Easy to access_: [Peoplecott](https://charlesstover.github.io/peoplecott/)
  must be accessible online and through mobile devices if customers are expected
  to search for their in-store purchases.
- _Easy to use_: A simple user interface is mandatory if customers are expected
  to search each purchase.
- _Unopinionated_: Not all companies listed on
  [Peoplecott](https://charlesstover.github.io/peoplecott/) should necessarily
  be boycott by all people. Each listed companies must include a reason so that
  readers may determine if they agree.

## Contributing

Contributing to Peoplecott's database requires knowing basic TypeScript. Open a
pull request with your desired change.

To add a brand to boycott, edit `src/constants/entity.ts` to give that brand an
`enum` value, then edit `src/constants/entities.ts` to provide reasons and
citations.

To add a child company, edit `src/constants/children.ts` to provide the parent
company and a citation.
