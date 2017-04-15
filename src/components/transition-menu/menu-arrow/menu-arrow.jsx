const myLineItems = [{ title: 'Lunch Menu', img: '/lunch.png' }, { title: "Hello World" }]

render(
    <div>
        <ul>
            {myLineItems.map((item, index) => {
                <li key={index}>

                </li>
            })}
        </ul>
    </div>
)

render(
    <div>
        {myLineItems.map((item, index) => {
            <ActionBadge
                title={item.title}
                key={index} />
        })}
    </div>
)


