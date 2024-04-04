import { Link } from 'react-router-dom';


const Header = ({ search, setSearch }) => {
    return (
        <div className='flex flex-col gap-6 min-h-screen bg-violet-100/20 pl-10 pr-10 pt-12 ml-4 mr-4 text-gray-100'>
            <div className="flex gap-2 text-2xl">
                <span className="text-4xl">&#127780;</span>
                <h2 className='font-mono'>Check Weather</h2>
            </div>
            <nav className='flex flex-col gap-3'>
                <Link to='/'>
                    <div className='flex items-center text-xl gap-3'>
                        <span className='text-3xl'>&#127969;</span>
                        <h2>Dashboard</h2>
                    </div>
                </Link>
                <Link to='/search'>
                    <div className='flex items-center gap-3 text-xl'>
                        <span>&#128269;</span>
                        <input 
                            type="text" 
                                placeholder='Search...' 
                                value={search} 
                                onChange={(e) => setSearch(e.target.value)} 
                                className="bg-transparent rounded-md pl-2 p-1" 
                            />
                    </div>
                </Link>
                <Link to='/about'>
                    <div className='flex gap-3 text-xl'>
                        <span>&#128160;</span>
                        <h2>About</h2>
                    </div>
                </Link>
            </nav>
        </div>
    );
}


export default Header;