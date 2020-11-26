![Image of Yaktocat](https://raw.githubusercontent.com/kaibarzen/fairy-tail-attack/master/example/header.png)

# Fairy Tail Attack!

"Fairy Tail Attack!" is a little helper tools which allows you to create playing cards out of html and css.
In its most basic form it's a react website and a headless chrome instance making screenshots of rendered html.

The output is customized to Tabletop Simulator which is an physical sandbox for tabletop games.

# Development

### Requirements
- Node (Tested on 14.15.1)
- Python 27

### Previewing cards
Run `yarn start` to open the CRA dev server, go to following paths to preview your cards.
- `/:deck/:cards/backside` Backside of an card.
- `/:deck/:cards/hidden` Hidden card side.
- `/:deck/:cards/sheet/:n` :n is the number of sheets starting by 1.

For example go to `/fta/role/sheet/1` to preview FTA role cards.

### Adding your own deck

If you decide to make your own deck you need to register it under `/decks/index.ts`.
It is an simple JS object out of which the HTML gets generated.
You can view my unfinished deck at `/decks/fta/fta.tsx`.

### Adding your own cards/styles

You can also add your own cards by passing other components to the deck, which will receive all specified props including width and height from the deck.

#### Wrapper

The Wrapper is optional and gets wrapped around all rendered cards allowing you to pass styles through css or creating an react context.

## Exporting
1. Start the dev server with `yarn start` and wait until a browser windows opens und loads.
2. Run `yarn build` which exports you cards to out/:deck/
3. Import them into TTS

# Example output
    
- [Action Card Sheet](https://raw.githubusercontent.com/kaibarzen/fairy-tail-attack/master/example/action_sheet.png)
- [Action Card Backside](https://raw.githubusercontent.com/kaibarzen/fairy-tail-attack/master/example/action_backside.png)
- [Character Card Sheet](https://raw.githubusercontent.com/kaibarzen/fairy-tail-attack/master/example/character_sheet.png)
- [Role Card Sheet](https://raw.githubusercontent.com/kaibarzen/fairy-tail-attack/master/example/role_sheet.png)
