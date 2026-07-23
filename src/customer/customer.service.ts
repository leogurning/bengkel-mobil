import { Injectable, NotFoundException } from '@nestjs/common';
import { CustomerRepository } from './customer.repository.js';
import { CreateCustomerDto } from './dto/create-customer.dto.js';
import { UpdateCustomerDto } from './dto/update-customer.dto.js';
import { Customer } from './entities/customer.entity.js';

@Injectable()
export class CustomerService {
  constructor(private readonly customerRepository: CustomerRepository) {}

  findAll(): Customer[] {
    return this.customerRepository.findAll();
  }

  findOne(id: number): Customer {
    const customer = this.customerRepository.findById(id);
    if (!customer) {
      throw new NotFoundException(`Customer dengan id ${id} tidak ditemukan`);
    }
    return customer;
  }

  create(createCustomerDto: CreateCustomerDto): Customer {
    return this.customerRepository.create(createCustomerDto);
  }

  update(id: number, updateCustomerDto: UpdateCustomerDto): Customer {
    const customer = this.customerRepository.update(id, updateCustomerDto);
    if (!customer) {
      throw new NotFoundException(`Customer dengan id ${id} tidak ditemukan`);
    }
    return customer;
  }

  delete(id: number): void {
    const deleted = this.customerRepository.delete(id);
    if (!deleted) {
      throw new NotFoundException(`Customer dengan id ${id} tidak ditemukan`);
    }
  }
}
