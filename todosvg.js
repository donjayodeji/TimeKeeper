var animation = bodymovin.loadAnimation({
container: document.getElementById('todosvgAnimation'),
    
// Set your ID to something that you'll associate with the animation you're using //
renderer: 'svg',
loop: true,
autoplay: true,
path: '1353-task-done.json'
    
// Make sure your path has the same filename as your animated     SVG's JSON file //
})