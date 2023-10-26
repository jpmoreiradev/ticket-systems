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
  