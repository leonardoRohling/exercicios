import { test } from "node:test"
import assert from "node:assert"
import { getPredecessorAndSuccessor } from "./exercise1.js";

/**
 * Documentação do Node TestRunner: https://nodejs.org/api/test.html
 */
test('should get predecessor and successor', (t) => {
    // Arrange
    const number = 1;

    // Act
    const result = getPredecessorAndSuccessor(number);

    // Assert
    assert.strictEqual(result[0], 0);
    assert.strictEqual(result[1], 2);
  });