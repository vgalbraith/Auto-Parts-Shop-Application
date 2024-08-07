package com.revature.service;

import com.revature.model.Order;
import com.revature.model.User;

import java.util.List;

public interface IOrderService {

    Order addOrder(Order order);

    Order getOrder(Integer orderId);

    Order updateOrder(Integer orderId, Order order);

    boolean deleteOrder(Integer orderId);

    List<Order> viewOrders();

    List<Order> viewUserOrders(User user);

}
