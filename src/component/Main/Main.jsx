import './Main.css';

const Main = () => {
    return(
        <>
            <div className="main">
                <div className="col col1">
                    <h2>NIKMATI PENGALAMAN TERBAIK</h2>
                    <h2>PERJALANAN DENGAN</h2>
                    <h2>FASTRENT.ID</h2>
                    <p>Fastrent menyediakan jasa dan kenyamanan anda saat ingin menyewa</p>
                    <p>ataupun rental mobil didaerah batam</p>
                    <button className="button">Ketahui lebih lanjut</button>
                </div>
                <div className="col">
                    <div className="card card1"></div>
                </div>
            </div>
            <div className='main2'>
                    <div className='col2'>
                        <h3>TIPE-TIPE KENDARAAN UNTUK ANDA</h3>
                    </div>
                    <div className='row'>
                        <div className='card2'>
                            <button className='btn'>Mobil MPV</button>
                        </div>
                        <div className='card3'>
                            <button className='btn'>Mobil SUV</button>
                        </div>
                        <div className='card4'>
                            <button className='btn'>Mobil Sedan</button>
                        </div>
                        <div className='card5'>
                            <button className='btn'>Mobil Minivan</button>
                        </div>
                    </div>
            </div>
        </>
    )
}

export default Main;