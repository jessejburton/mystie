import React, { useState } from 'react'
import SecondaryNavigation from '../components/SecondaryNavigation'
import PlanMonth from './PlanMonth'
import PlanMonthly from './PlanMonthly'
import Content from '../layout/Content'
import moment from 'moment'

export const Plan = () => {

  const [page, setPage] = useState("month");

  return (
    <div>
      <SecondaryNavigation>
        <li onClick={() => setPage("month")}>{moment().format('MMMM')}</li>
        <li onClick={() => setPage("monthly")}>Monthly</li>
        <li onClick={() => setPage("history")}>History</li>
      </SecondaryNavigation>

      <Content>
        {page === "month" &&
          <PlanMonth />
        }

        {page === "monthly" &&
          <PlanMonthly />
        }

        {page === "history" &&
          <h1>History</h1>
        }
      </Content>

    </div>
  )
}

export default Plan