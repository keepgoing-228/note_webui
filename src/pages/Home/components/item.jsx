
const Item = ({ item_note, item_date, item_time }) => {

    return (
        <div className="item">
            <div>
                <p>{item_note}</p>
                <p>{`${item_date} ${item_time}`}</p>
            </div>
            <button className="remove">remove</button>
        </div>
    );
}

export default Item;