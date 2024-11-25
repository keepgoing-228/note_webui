import Item from "./item";

const List = ({ listData }) => {
    console.log('listData:', listData);
    return (
        <div className="list">
            {
                listData.map((item) => {
                    const { id, note, date, time } = item
                    return <Item key={id} item_note={note} item_date={date} item_time={time} />
                })

            }
        </div>
    );
}

export default List;