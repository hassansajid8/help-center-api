import './App.css';
import Footer from './components/Footer';
import TopBar from './components/TopBar';
import Card from './components/Card';
import { useEffect, useState } from 'react';
import 'ldrs/ring'
import { ring } from 'ldrs';

function App() {

  const [data, setData] = useState(null);
  const [showData, setShowData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
    ring.register();
  }, []);

  const fetchData = async () => {
    const serverURI = "http://localhost:4444/cards";

    try {
      const response = await fetch(serverURI, {
        method: "GET",
      });

      if (!response.ok) {
        console.log("repsonse not okay");
        setLoading(false);
        return;
      }

      let result = await response.json();

      setData(result);
      setShowData(result);

    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const searchCards = (e) => {
    e.preventDefault();
    setLoading(true);
    const searchTerm = e.target.searchTerm.value;
    if (data && searchTerm != '') {
      setShowData(null);
      let searchedItems = [];
      data.map((item) => {
        if((item.title).toLowerCase().includes(searchTerm) || (item.description).toLowerCase().includes(searchTerm)){
          searchedItems.push(item);
        }
      })

      setTimeout(() => {
        setShowData(searchedItems);
        setLoading(false);
      }, 300);
    }else{
      setTimeout(() => {
        setShowData(data);
        setLoading(false);
      }, 300);
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">

      <div className='bg-purple p-1'>
        <TopBar />
        <div className="py-24 text-center">
          <h2 className="sm:text-6xl text-5xl font-medium">How can we help?</h2>
          <div className="mt-12 flex justify-center">
            <form className='bg-white px-2 rounded border md:w-2/5 flex shadow-md' onSubmit={searchCards}>
              <input
                type="text"
                name='searchTerm'
                placeholder="Search"
                className="search-input px-4 flex-1 text-left"
              />
              <button type='submit' className="p-4">→</button>
            </form>
          </div>
        </div>
      </div>

      <div className='flex justify-center'>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-20 md:gap-x-24 md:p-28 py-28 md:w-fit w-full">

          {showData ? showData.map((item) => {
            return <Card title={item.title} description={item.description} />
          }) : <div className='m-auto'>
            {loading ? <l-ring size="20" stroke="1"></l-ring> : <p>Nothing to show here...</p>}
          </div>}

        </div>

      </div>

      <Footer />

    </div>
  );
}

export default App;
