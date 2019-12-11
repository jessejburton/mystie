import React, { useState } from 'react'
import SecondaryNavigation from '../components/SecondaryNavigation'

export const Plan = () => {

  const [page, setPage] = useState("monthly");

  return (
    <div>
      <SecondaryNavigation>
        <li onClick={() => setPage("monthly")}>Monthly</li>
        <li onClick={() => setPage("yearly")}>Yearly</li>
        <li onClick={() => setPage("reports")}>Reports</li>
      </SecondaryNavigation>

      {page === "monthly" &&
        <h1>January</h1>
      }

      {page === "yearly" &&
        <h1>2020</h1>
      }

      {page === "reports" &&
        <h1>Reports</h1>
      }

    </div>
  )
}

export default Plan