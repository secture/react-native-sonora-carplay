# CarPlay with React Native

What if you could create CarPlay with React Native. Well, now you can.

![List Template](.github/list-template.png)

![Grid Template](.github/grid-template.png)

![Search Template](.github/search-template.png)

## Usage

Create one of the following templates

```jsx
import { CarPlay, GridTemplate } from 'react-native-carplay';

const template = new GridTemplate({ /* .. */ });

CarPlay.setRootTemplate(template, false);
```

### setRootTemplate

Sets the root template of CarPlay.

This must be called before running any other CarPlay commands. Can be called multiple times.

```tsx
CarPlay.setRootTemplate(template, /* animated */ false);
```

### pushTemplate

Pushes a new template to the navigation stack.

**Note** you cannot push the same template twice.

(where `template` is one of GridTemplate, ListTemplate or SearchTemplate)

```tsx
CarPlay.pushTemplate(template, /* animated */ true);
```

### popTemplate

Pop currently presented template from the stack.

```tsx
CarPlay.popTemplate(/* animated */ false);
```

### popToTemplate

Pop currently presented template from the stack to a specific template. The template must be in the stack.

```tsx
CarPlay.popToTemplate(template, /* animated */ false);
```

### popToRoot

Pop the stack to root template.

```tsx
CarPlay.popToRoot(/* animated */ false);
```

## Example

```jsx
import { CarPlay, ListTemplate } from 'react-native-carplay';

// Register a new template in memory
const artists = new ListTemplate({
  title: 'List of artists',
  leadingNavigationBarButtons: [{
    id: 'play',
    type: 'text',
    title: 'Play',
  }],
  sections: [{
    items: [{
      text: 'AC/DC'
      detailText: 'Rock',
      image: require('./artists/ac-dc.png'),
      showsDisclosureIndicator: true,
    }],
  }],
  onItemSelect(item) {
    const artist = new ListTemplate({
      title: 'AC/DC',
      sections: [...],
    });

    CarPlay.pushTemplate(artist, true);
  }
});

// Somewhere in your app
class App extends Component {
  componentDidMount() {
    CarPlay.setRootTemplate(songs, false);
  }
}
```

## Progress

### UI Elements

- [x] CPListTemplate
- [x] CPGridTemplate
- [x] CPSearchTemplate
- [ ] CPMapTemplate

### Route Guidance

- [ ] CPNavigationSession
- [ ] CPTrip
- [ ] CPManeuver

### Other

- [ ] CPSessionConfiguration
- [ ] CPAlertTemplate
- [ ] CPAlertAction

### Methods

- [x] setRootTemplate
- [x] pushTemplate
- [x] popTemplate
- [x] popToTemplate
- [x] updateListTemplateSections
- [x] reactToUpdatedSearchText
- [x] reactToSelectedResult

### Events

- [x] didConnect
- [x] didDisconnect
- [x] didSelectListItem
- [x] selectedResult
- [x] gridButtonPressed
- [x] updatedSearchText
- [x] searchButtonPressed
- [x] barButtonPressed
