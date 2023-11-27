"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";

interface OrdersTableProps {
  orders: any[];
}

const OrdersTable = ({ orders }: OrdersTableProps) => {
  const handleTouchOrder = (key: string | number | bigint) => {
    const selectedOrder = orders.find((order) => `${order.id}` === key);
    console.log({ selectedOrder, orders });
  };

  return (
    <Table
      onRowAction={handleTouchOrder}
      bgcolor="black"
      aria-label="Example static collection table"
    >
      <TableHeader className="border-l border-neutral-200 bg-white/80 p-6 text-black dark:border-neutral-700 dark:bg-black/80 dark:text-white">
        <TableColumn>Created at</TableColumn>
        <TableColumn>Total items</TableColumn>
        <TableColumn>Status</TableColumn>
        <TableColumn>Total</TableColumn>
      </TableHeader>
      <TableBody
        emptyContent="No orders yet"
        className="border-l border-neutral-200 bg-white/80 p-6 text-black dark:border-neutral-700 dark:bg-black/80 dark:text-white"
      >
        {orders.map((order) => (
          <TableRow
            key={order.id}
            className="hover:bg-default-100 cursor-pointer"
          >
            <TableCell suppressHydrationWarning>
              {new Date(order.created_at).toLocaleDateString()}
            </TableCell>
            <TableCell>{order.items.length}</TableCell>

            <TableCell>Created</TableCell>
            <TableCell>${order.total}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default OrdersTable;
