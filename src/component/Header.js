function Header() {
    return (
        <div className="heading" style={{
            display: "flex",
            alignItems: "center",
            padding: "10px 20px",
            borderBottom: "1px solid #eee",
            gap: "20px",
            flexWrap: "wrap"
        }}>
            <img className="images" style={{ width: "80px" }}
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAlAMBEQACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABgEDBQcIBAL/xABNEAABAwICBQYICgYIBwAAAAABAAIDBAUGEQcSITFBE1FhcYGRFCI2QnWUs9EIFRcyUlRVk6HTFiMmM0XBQ3KSsbLC4fEkRGKCotLw/8QAGwEBAAIDAQEAAAAAAAAAAAAAAAECAwUGBAf/xAAwEQEAAgECBQIEBAcBAAAAAAAAAQIDBBEFEiExQRNRIjKxwRRxkeEGI2GBodHwYv/aAAwDAQACEQMRAD8A0agICAgICAgICAgICAgICAgICAgICAg99os9xvVSKa1UU9XN9GJhOXSTuA60E5odCmL6qIPlbQ0hPmz1G3/xDlOw9J0F4pH/ADlo++k/LTZG6nyGYq+t2n76T8tTym58hmKfrlp++k/LTlN1PkNxT9ctP30n5acpufIbin65afvpPy05ZNz5DcU/XLT99J+WnLJufIbin65afvpPy05Tc+QzFP1y0/fSflpym47QdioDMVVqPQJpP/ROU3R2+6OMVWKN0tZapJIG75aYiVoHOctoHWFG0pRM71AogICAgIJ7ov0d1OMqx1RVOfT2mB2Uso+dKfoM6ec8EHSlksdusVCyitVJFTQMHzWDaekneT0lBkdUIGQQMggZIGqFO4aoTcNUJuGqE3DVCbhqhNxQsB4JvI1npH0V0GIYZa60Rx0d2aCfFGrHUdDhwP8A1d+anuhzjWU09HUy01VE6KeJ5ZJG8ZFrhvBVUrCAgIPdZLZNebtR22lbnNVTNjaebM7T1AbUgdg4dtNLY7RS2yhjDIKeMNAyy1jxceknMnrUyMooBAQEBAQEBAQEBAQfL8stqDRPwgcLRxup8SUkYaXuEFXqjefMee7I9itMdN0NKKqRAQbF0D0bKrHrJJBn4LSyTN2cdjf8ytXuiXTUe5RKVxQCChKDVmLsU1F1q5KK21MkFujOqZIHlr6h3HxhtDQebf1LLTFE0nLftET/AHdPw3hVa1jLmjeZ8PFh6prrYDUWyomJY/N9NNK58cw5sifFPMR25rl8fE8kZd7fLP8Ahn1uixZOm2zatpr4LpQQ1tMTycrc8nDItO4tI4EHMFdDW0WrFocplx2x3mlu8PWdysoh2LL5UuqjabXMYS0A1VS..."/>
            <div className="options" style={{ display: "flex", gap: "10px" }}>
                <button className="but">Men</button>
                <button className="but">Women</button>
                <button className="but">Kids</button>
                <button className="but">Beauty & Studio</button>
                <button className="but">Home & Living</button>
            </div>
            <input className="search" placeholder="Search for products and brands" style={{
                padding: "8px 15px",
                borderRadius: "4px",
                border: "1px solid #ddd",
                width: "250px"
            }} />
            <div className="profile" style={{ display: "flex", gap: "10px" }}>
                <button className="pro">Profile</button>
                <button className="pro">Wishlist</button>
                <button className="pro">Bag</button>
            </div>
        </div>
    );
}
export default Header;