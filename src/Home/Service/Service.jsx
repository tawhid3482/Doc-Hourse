import doc from '../../assets/services/doc.png'
import dat from '../../assets/services/dat.png'
const Service = () => {
    return (
        <div>
            <div className="flex-col md:flex-row md:flex md:justify-between md:items-center p-5">
                <div className="w-1/2 border border-red-500">
                    <img src={doc} className='w-80 max-h-screen' alt="" />
                </div>
                <div className="w-1/2 border border-red-500">
                    <div className="">
                        <p className='text-5xl font-bold'>Our Services</p>
                        <h1 className='my-2 text-lg'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</h1>
                        <div className="flex my-8 gap-5">
                            <button className='btn bg-red-300 text-black'>Cavity Protection</button>
                            <button className='btn bg-red-300 text-black'>Cosmetic Dentisty</button>
                            <button className='btn bg-red-300 text-black'>Oral Surgery</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;