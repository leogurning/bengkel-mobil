import { Injectable } from '@nestjs/common';
import { Customer } from './entities/customer.entity.js';
import { CreateCustomerDto } from './dto/create-customer.dto.js';
import { UpdateCustomerDto } from './dto/update-customer.dto.js';
import { customersData } from '../data/customers.js';

@Injectable()
export class CustomerRepository {
  private customers: Customer[] = [];
  private nextId = 1;

  constructor() {
    customersData.forEach((data) => {
      this.customers.push({ id: this.nextId++, ...data });
    });
  }

  findAll(): Customer[] {
    return this.customers;
  }

  findById(id: number): Customer | undefined {
    return this.customers.find((customer) => customer.id === id);
  }

  create(createCustomerDto: CreateCustomerDto): Customer {
    const customer: Customer = {
      id: this.nextId++,
      ...createCustomerDto,
    };
    this.customers.push(customer);
    return customer;
  }

  update(
    id: number,
    updateCustomerDto: UpdateCustomerDto,
  ): Customer | undefined {
    const index = this.customers.findIndex((customer) => customer.id === id);
    if (index === -1) return undefined;

    this.customers[index] = { ...this.customers[index], ...updateCustomerDto };
    return this.customers[index];
  }

  delete(id: number): boolean {
    const index = this.customers.findIndex((customer) => customer.id === id);
    if (index === -1) return false;

    this.customers.splice(index, 1);
    return true;
  }
}
