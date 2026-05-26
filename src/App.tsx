import './App.css'

function App() {
  return (
    <div className="dashboard">

      {/* Sidebar */}
      <aside className="sidebar">

        <h2 className="logo">
          MyBank
        </h2>

        <nav className="menu">
          <a href="#">Dashboard</a>
          <a href="#">Accounts</a>
          <a href="#">Transactions</a>
          <a href="#">Transfer</a>
          <a href="#">Settings</a>
        </nav>

      </aside>

      {/* Main Content */}
      <main className="main-content">

        {/* Navbar */}
        <header className="navbar">

          <h1>
            Banking Dashboard
          </h1>

          <div className="profile">
            JD
          </div>

        </header>

        {/* Cards */}
        <section className="cards">

          <div className="card">
            <h3>Checking</h3>
            <p>$5,420.25</p>
          </div>

          <div className="card">
            <h3>Savings</h3>
            <p>$12,450.80</p>
          </div>

          <div className="card">
            <h3>Credit</h3>
            <p>$-820.15</p>
          </div>

          <div className="card">
            <h3>Investments</h3>
            <p>$22,140.55</p>
          </div>

        </section>

        {/* Transactions */}
        <section className="transactions">

          <div className="transactions-header">
            <h2>Recent Transactions</h2>
          </div>

          <table>

            <thead>
              <tr>
                <th>Date</th>
                <th>Description</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>2026-05-24</td>
                <td>Amazon Purchase</td>
                <td className="negative">-$120.45</td>
                <td>Completed</td>
              </tr>

              <tr>
                <td>2026-05-23</td>
                <td>Salary Deposit</td>
                <td className="positive">$3,200.00</td>
                <td>Completed</td>
              </tr>

              <tr>
                <td>2026-05-22</td>
                <td>Electric Bill</td>
                <td className="negative">-$85.00</td>
                <td>Completed</td>
              </tr>

            </tbody>

          </table>

        </section>

      </main>

    </div>
  )
}

export default App