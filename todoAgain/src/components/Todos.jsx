export function Todos(props) {
    return (
        <>
            <div>
                {props.todos.map((todo, index) => (
                    <li key={index}>
                        <h1>{todo.title}</h1>
                        <h2>{todo.description}</h2>
                        <button style={{ color: todo.completed ? 'green' : 'red' }}>Done</button>
                    </li>
                ))}
            </div>
        </>
    );
}
