import { CartProduct } from "@/types/ClientProduct";
import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import TruncateText from "./TruncateText/TruncateText";
import { Image } from "@nextui-org/react";
import NextImage from "next/image";
interface OrdersListsCardsProps {
  orders: any[];
}

const OrdersListsCards = ({ orders }: OrdersListsCardsProps) => {
  return (
    <div className="flex flex-col gap-4 justify-center">
      {orders.map((order) => (
        <Card key={order.id} className="border">
          <CardHeader className="flex flex-row justify-between bg-gray-700">
            <div className="flex flex-row justify-between w-full md:w-1/2 ">
              <div className="flex flex-col">
                <p className="text-sm">ORDER PLACED</p>
                <p className="text-sm">
                  {new Date(order.created_at).toLocaleDateString()}
                </p>
              </div>
              <div className="flex flex-col">
                <p className="text-sm">TOTAL</p>
                <p className="text-sm">${order.total.toFixed(2)}</p>
              </div>
              <div className="flex flex-col">
                <p className="text-sm">STATUS</p>
                <p className="text-sm">Created</p>
              </div>
            </div>
            <div className="flex justify-end w-1/2">
              <p className="text-sm md:text-lg font-bold">ORDER #{order.id}</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody className="flex flex-col gap-y-5">
            {order.items.map((item: CartProduct) => (
              <div
                key={item.id}
                className="flex flex-row justify-between gap-2"
              >
                <div className="flex flex-col md:flex-row gap-2">
                  <div className="flex flex-row gap-2">
                    <Image
                      as={NextImage}
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full rounded-lg object-cover md:w-24 md:h-24"
                      width={120}
                      height={120}
                    />
                    <div className="md:hidden">
                      <p className="text-sm">{item.color}</p>
                      <p className="text-sm">{item.size}</p>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <TruncateText text={item.name} maxLength={50} />
                    <div className="hidden md:block">
                      <p className="text-sm">{item.color}</p>
                      <p className="text-sm">{item.size}</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col">
                  <p className="text-sm">
                    ${item.price.toFixed(2)} x({item.quantity})
                  </p>
                  <p className="text-sm">
                    Total: ${item.itemTotal?.toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </CardBody>
        </Card>
      ))}
    </div>
  );
};

export default OrdersListsCards;
