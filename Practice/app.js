function color_change() {
    let colors = ['red', 'yellow', 'lightblue', 'grey', 'brown', 'purple', 'violet', 'orange', 'aliceblue', 'azure', 'beige', 'salmon', 'darkseagreen', 'honeydew', 'lavender', 'linen', 'pink', 'plum', 'skyblue', 'seashell', 'gold', 'palegreen', 'cyan', 'aqua','mediumslateblue', 'snow', 'mistyrose', 'silver', 'wheat', 'cornsilk']
    let emojis = ['😀', '😁', '😂', '🤣', '😃', '😄', '😎', '😋', '😊', '😉', '😆', '😅', '😍', '😘', '🥰', '😙', '😗', '🥲', '🤔', '🤩', '🤗', '🙂', '😚', '🫡', '🤨', '😐', '😑', '😶', '🫥', '😮', '😥', '😣', '😏', '🙄', '😯', '😪', '😫', '🥱', '😴', '😒', '🤤', '😝', '😜', '😛', '😌', '😓', '😔', '😕', '🫤', '🙃', '🫠', '😞', '😖', '🙁', '☹️', '😲', '🤑', '😟', '😤', '😢', '😭', '😦', '😧', '😰', '😮‍💨', '😬', '🤯', '😩', '😨', '😱', '🥵', '🥶', '😳', '🤪', '😵', '😷', '🤬', '😡', '😠', '🥴', '😵‍💫', '🤒', '🤕', '🤢', '🤮', '🤧', '😇', '🤡', '🤠', '🥹', '🥺', '🥳', '🤥', '🤫', '🤭', '🫢', '🫣', '🧐', '🤓', '👽', '👾', '👻', '🐹']

    let randomcolor = Math.floor((Math.random() * 12));
    let randomemoji = Math.floor((Math.random() * 103));

    document.body.style.backgroundColor = colors[randomcolor]
    var elem = document.getElementById("myButton");
    elem.innerText = emojis[randomemoji]
}