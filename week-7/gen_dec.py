import random

def random_num_gen(n, l):
    nums = []
    while len(nums) < n:
        num = random.randint(10**(l-1), 10**(l)-1)
        if num not in nums:
            nums.append(num)
            yield num

print(list(random_num_gen(2, 5)))

def my_awesome_decorator(fun):
    def wrapped(*args):
        return not fun(*[i+1 for i in args])
    return wrapped

@my_awesome_decorator
def mod_batch(*nums):
    for i in nums:
        if i % 3 != 0:
            return False
    return True

print(mod_batch(4, 9, 18))