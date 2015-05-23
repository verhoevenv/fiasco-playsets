# fiasco-playsets

A machine-readable listing of [Fiasco][fiasco] playsets.

## I would like to find a playset

Go to the [github-pages fueled site of this repo][public-site]. You'll find a (mobile-friendly) search interface to the data.

## I would like to improve the data

If you know of a missing ruleset, want to correct a typo or would like to discuss tags, feel free to log an issue or a pull request!

## I would like to use the data in my own project

Please do! The data (and everything else in this repo) is under CC0 which gives you all rights to use it.

There are a couple of ways to get the data:

1. [Grab the raw json][public-json]. This is useful for one-time or simple projects. I make no guarantee that I'll keep using the same schema, so you shouldn't build stable applications on this.
2. Include [this javascript file][public-js] that loads the data in a ``fiasco_playsets`` global variable. This is the best way I know to get around the same-origin policy on Github pages. You once again don't want to build a stable application on my version of the data.
3. Fork the repo and do as you please.

[fiasco]: http://www.bullypulpitgames.com/games/fiasco/
[public-site]: http://verhoevenv.github.io/fiasco-playsets/
[public-json]: http://verhoevenv.github.io/fiasco-playsets/playsets.json
[public-js]:http://verhoevenv.github.io/fiasco-playsets/playsets.json.js
