const users = ["eyal", "eitan", "tomer-next", "kalimi", "sami's"]
const usersNew = []
for (let index = 0; index < users.length; index++) {
    if (users[index].length <= 5) {
        usersNew.push(usersNew[index])
    }
}

<div id="someId" className="my-class">Hello World!<span>aa</span></div>;

React.createElement('div', { id: "someId", className: 'my-class' }, 'Hello World!');
