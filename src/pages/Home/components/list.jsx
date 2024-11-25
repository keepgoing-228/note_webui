import Item from "./item";

const List = ({ listData, deleteData, submittingStatus }) => {
    // console.log('listData:', listData);
    return (
        <div className="list">
            {
                listData.map((item) => {
                    const { id, note, date, time } = item
                    return <Item
                        key={id}
                        id={id}
                        item_note={note}
                        item_date={date}
                        item_time={time}
                        deleteData={deleteData}
                        submittingStatus={submittingStatus}
                    />
                })

            }
        </div>
    );
}

export default List;