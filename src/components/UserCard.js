const users = [{name: `John`, id: 1},{name: `Bob`, id: 2}, {name: `Alex`, id: 3}, {name: `Sabina`, id: 4},{name: `Julia`, id: 5}];


function UserCard() {
    return (
        <>
            {
                users.map(item => {
                    return <div key={item.id}>{item.name}</div>
                })
            }
        </>
    );
}

export default UserCard;