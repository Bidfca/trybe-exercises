
class StackOverflow(Exception):
    pass

class Stack():
    def __init__(self):
        self._data = list()
        self.limit = 10

    def size(self):
        return len(self._data)

    def is_empty(self):
        return not bool(self.size())

    def push(self, value):
        if self.size() == self.limit:
            raise StackOverflow()
        self._data.append(value)

    def pop(self):
        if self.is_empty():
            return None
        value = self._data[-1]
        del self._data[-1]
        return value

    def peek(self):
        if self.is_empty():
            return None
        value = self._data[-1]
        return value

    def clear(self):
        self._data.clear()

    def __str__(self):
        str_items = ""
        for i in range(self.size()):
            value = self._data[i]
            str_items += str(value)
            if i + 1 < self.size():
                str_items += ", "
        return "Stack(" + str_items + ")"

    def min_value(self):
        min = self._data[0]
        for value in self._data:
            if value < min:
               min = value
        return min

if __name__ == "__main__":
    elements = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    content_stack = Stack()

    for elem in elements:
        content_stack.push(elem)

    # saída: Stack(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
    print(content_stack)