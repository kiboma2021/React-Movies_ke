import { Header,Footer } from './components';
import { AllRoutes } from './routes/AllRoutes';

function App() {
  return (
    <main className='dark:bg-slate-700'>
      <Header />
      <AllRoutes />

      <Footer />


    </main>
  );
}

export default App;
