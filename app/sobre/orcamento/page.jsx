import BudgetForm from "./components/BudgetForm"
import HeroBudget from "./components/HeroBudget"
import StepsSection from "./components/StepsSection"

export default function Orcamento() {
  return (
    <div className="min-h-[80vh]">
      <HeroBudget />
      <BudgetForm />
      <StepsSection />
    </div>
  )
}
