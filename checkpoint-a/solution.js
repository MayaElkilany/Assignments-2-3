/// Checkpoint A

import { findAllOrders, findOrderById } from "./orders-db.js";

export async function loadOrders() {
  return await findAllOrders();
}

export function myOrders(orders) {
  return orders.filter(
    (order) => order.city === "Giza" && order.status === "cancelled"
  );
}

export function summarize(orders) {
  return orders.reduce((sum, order) => sum + order.price * order.quantity, 0);
}

export async function describeOrder(id) {
  try {
    const order = await findOrderById(id);
    return `${order.student}: ${order.item} x${order.quantity}`;
  } catch (error) {
    return `Could not find order ${id}`;
  }
}

export function toJsonLines(orders) {
  return JSON.stringify(
    orders.map((order) => ({ item: order.item, quantity: order.quantity }))
  );
}