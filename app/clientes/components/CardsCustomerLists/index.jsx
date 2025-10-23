import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const CardsCustomerLists = ({ customers }) => {
  return (
    <div className="my-4 flex flex-wrap justify-center gap-4">
      {customers.map((customer) => (
        <Card key={customer.id} className="w-[350px] max-w-[95%] p-0">
          <CardContent className="p-4">
            <div className="space-y-4">
              <div className="relative h-[150px] w-full overflow-hidden">
                <Image
                  src={customer.image}
                  alt={customer.name}
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
              <div>
                <h4 className="text-lg font-semibold">{customer.name}</h4>
                <p className="text-xs text-shadow-gray-500">
                  Cliente há{" "}
                  <span className="text-yellow-400">{customer.time}</span>
                </p>
              </div>
              <div className="text-xs text-shadow-gray-400">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  lobortis luctus lacus. Nunc porta ipsum et tempor euismod.
                  Dolor sit amet, consectetur adipiscing elit. Mauris finibus
                  molestie diam vel mollis. Maecenas risus ipsum, accumsan sed
                  elementum at, rhoncus et diam. finibus molestie diam vel
                  mollis. Maecenas risus ipsum, accumsan sed elementum at,
                  rhoncus et diam. finibus molestie diam vel mollis. Maecenas
                  risus ipsum, accumsan sed elementum at, rhoncus et
                  diam.finibus molestie diam vel mollis.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export default CardsCustomerLists
