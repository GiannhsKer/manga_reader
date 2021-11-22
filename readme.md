# manga_reader 
An Android app displaying a collection of mangas. The project consists of an android app and a server, both written in Javascript, React-Native and Nodejs respectively.

<p float="left">
    <img src="/Screenshots/manga_reader Home.png" alt="screenshot1" width="250"/>
    <img src="/Screenshots/manga_reader Chapters.png" alt="screenshot2" width="250"/>
    <img src="/Screenshots/manga_reader Display.png" alt="screenshot3" width="250"/>
</p>

### How to run it locally

1. Install nodejs, npm, yarn , expocli.
2. ( Optional ) Install vscode, git 
3. Download the repository
4. Install latest version of packages by running
```$ yarn install``` 
4. To start the server, move into /server directory and run
```$ yarn run dev``` 
4. You are ready to go, in the project folder, open terminal and run 
```$ expo start --web``` to run from browser or
```$ expo start``` to see your other options



### Tasks
* Prettier UI, change of fonts, buttons etc.
* Add scrappers for more mangas (update server/scrappers.js by adding more functions)
* Gestures, to be able to change pages by swiping (Display.js)
* Any other ideas are welcome