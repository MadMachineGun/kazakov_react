const users = [`John`, `Bob`, `Alex`, `Sabina`, `Julia`];


function UserCard() {
    return (
        <>
            {
                users.map(item => {
                    return (
                        <div>{item}</div>
                    )
                })
            }
        </>
    );
}

export default UserCard;