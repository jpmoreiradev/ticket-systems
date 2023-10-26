# Ticket-Systems
### ptbt:

aqui temos um exemplo simplificado em JavaScript que demonstra o processo de venda de ingressos com base na arquitetura discutida. Este exemplo não abrange todos os detalhes, mas destaca os principais componentes e a lógica geral de como funcionaria o projeto.

Neste exemplo, temos uma classe TicketSystem que gerencia a venda de ingressos. Ela controla a autenticação do usuário, a compra de ingressos, a fila de pedidos e a disponibilidade de ingressos. Lembre-se de que este é apenas um exemplo simplificado e não inclui autenticação real ou escalabilidade. Em um ambiente real, você precisaria adicionar recursos adicionais, como autenticação segura, tratamento de erros, persistência de dados e segurança contra ação de bots.

### us: 

Here we have a simplified example in JavaScript that demonstrates the ticket sales process based on the architecture discussed. This example doesn't cover all the details, but it highlights the main components and general logic of how the project would work.

In this example, we have a TicketSystem class that manages ticket sales. It controls user authentication, ticket purchasing, order queuing, and ticket availability. Keep in mind that this is just a simplified example and does not include actual authentication or scalability. In a real environment, you would need to add additional features such as secure authentication, error handling, data persistence, and bot security.


### Execute code

```shell
node script.js
```

### Code scprit.js

```javascript
const userName = "João Pedro"
const totalTickets = 100


class TicketSystem {
    constructor(totalTickets) {
      this.totalTickets = totalTickets;
      this.availableTickets = totalTickets;
      this.ordersQueue = [];
    }
  
    authenticateUser() {
      // Simulação da autenticação do usuário
      return true;
    }
  
    purchaseTicket(userId, numTickets) {
      if (numTickets <= this.availableTickets) {
        // Cria um pedido de compra e adiciona à fila de pedidos
        const order = { userId, numTickets };
        this.ordersQueue.push(order);
  
        // Atualiza a contagem de ingressos disponíveis
        this.availableTickets -= numTickets;
  
        // Processa o pedido de compra
        this.processOrders();
        return `Compra bem-sucedida. ${numTickets} ingresso(s) emitido(s).`;
      } else {
        return "Ingressos insuficientes. Compra não efetuada.";
      }
    }
  
    processOrders() {
      while (this.ordersQueue.length > 0) {
        const order = this.ordersQueue[0];
        if (order.numTickets <= this.availableTickets) {
          // Emite os ingressos
          this.availableTickets -= order.numTickets;
          console.log(`Ingresso(s) emitido(s) para o usuário ${order.userId}.`);
          this.ordersQueue.shift();
        } else {
          break;
        }
      }
    }
  
    getAvailableTickets() {
      return this.availableTickets;
    }
  }
  
  // Exemplo de uso:
  const ticketSystem = new TicketSystem(totalTickets); // Total de 100 ingressos disponíveis
  
  // Simulação de autenticação do usuário
  const isAuthenticated = ticketSystem.authenticateUser();
  
  if (isAuthenticated) {
    const numTicketsToPurchase = 4;
    const purchaseResult = ticketSystem.purchaseTicket(userName, numTicketsToPurchase);
    console.log(purchaseResult);
  
    const availableTickets = ticketSystem.getAvailableTickets();
    console.log(`Ingressos disponíveis: ${availableTickets}`);
  }
  
```
