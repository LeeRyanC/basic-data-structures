def reverseLinkedList(head):
    current = head
    runner = head.next
    while(runner.next != None):
        current = current.next
        runner = runner.next
    
    