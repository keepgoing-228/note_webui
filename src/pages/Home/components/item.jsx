
const Item = ({ id, item_note, item_date, item_time, deleteData, submittingStatus }) => {

    function deleteItem() {
        submittingStatus.current = true;
        deleteData(function (prev) {
            return prev.filter(item => item.id !== id)
        })
    }

    return (
        <div className="item">
            <div>
                <p>{item_note}</p>
                <p>{`${item_date} ${item_time}`}</p>
            </div>
            <button onClick={deleteItem} className="remove">remove</button>
        </div>
    );
}

export default Item;